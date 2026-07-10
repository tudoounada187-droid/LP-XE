import { useEffect, useRef } from "react";

const limitar = (valor: number, minimo: number, maximo: number) =>
  Math.min(maximo, Math.max(minimo, valor));

const interpolar = (inicio: number, fim: number, progresso: number) =>
  Math.round(inicio + (fim - inicio) * progresso);

function corDoGradiente(progresso: number) {
  const azul = [28, 61, 253];
  const violeta = [92, 37, 252];
  const magenta = [137, 5, 245];
  const cores = progresso < 0.5 ? [azul, violeta] : [violeta, magenta];
  const mistura = progresso < 0.5 ? progresso * 2 : (progresso - 0.5) * 2;

  return cores[0].map((canal, indice) => interpolar(canal, cores[1][indice], mistura));
}

export function Rodape() {
  const areaDaMarca = useRef<HTMLElement>(null);
  const superficieDaAgua = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const area = areaDaMarca.current;
    const canvas = superficieDaAgua.current;

    if (!area || !canvas) {
      return;
    }

    const contexto = canvas.getContext("2d", { alpha: true });
    const reduzirMovimento = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!contexto) {
      return;
    }

    const textoDaMarca = area.querySelector<HTMLElement>(".footer-wordmark");

    if (!textoDaMarca) {
      return;
    }

    const areaAtiva: HTMLElement = area;
    const canvasAtivo: HTMLCanvasElement = canvas;
    const contextoAtivo: CanvasRenderingContext2D = contexto;
    const textoAtivo: HTMLElement = textoDaMarca;

    let largura = 0;
    let altura = 0;
    let ondaAtual = new Float32Array(0);
    let ondaAnterior = new Float32Array(0);
    let proximaOnda = new Float32Array(0);
    let velocidadeDaAgua = new Float32Array(0);
    let fluxoDaAgua = new Float32Array(0);
    let absorcaoDasBordas = new Float32Array(0);
    let imagem: ImageData | null = null;
    let quadro = 0;
    let animando = false;
    let mouseDentro = false;
    let intensidadeDoBrilho = 0;
    let cursorX = 0;
    let cursorY = 0;
    let ultimoPonto: { x: number; y: number; momento: number } | null = null;

    function ruido(x: number, y: number) {
      const valor = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453;
      return valor - Math.floor(valor);
    }

    function redimensionar() {
      const caixa = canvasAtivo.getBoundingClientRect();
      const escala = Math.max(3, caixa.width / 520);

      largura = Math.max(96, Math.round(caixa.width / escala));
      altura = Math.max(36, Math.round(caixa.height / escala));
      canvasAtivo.width = largura;
      canvasAtivo.height = altura;

      const tamanho = largura * altura;
      ondaAtual = new Float32Array(tamanho);
      ondaAnterior = new Float32Array(tamanho);
      proximaOnda = new Float32Array(tamanho);
      velocidadeDaAgua = new Float32Array(tamanho);
      fluxoDaAgua = new Float32Array(tamanho);
      absorcaoDasBordas = new Float32Array(tamanho);
      imagem = contextoAtivo.createImageData(largura, altura);

      for (let y = 0; y < altura; y += 1) {
        for (let x = 0; x < largura; x += 1) {
          const indice = y * largura + x;
          const distanciaDaBorda = Math.min(x, y, largura - 1 - x, altura - 1 - y);
          const faixaDeAbsorcao = Math.min(22, Math.max(10, Math.round(altura * 0.12)));

          velocidadeDaAgua[indice] = 0.484 + ruido(x * 0.17, y * 0.19) * 0.012;
          fluxoDaAgua[indice] = (ruido(x * 0.11, y * 0.13) - 0.5) * 0.038;
          absorcaoDasBordas[indice] =
            distanciaDaBorda < faixaDeAbsorcao
              ? 0.91 + (distanciaDaBorda / faixaDeAbsorcao) * 0.069
              : 0.979;
        }
      }
    }

    function perturbarAgua(
      xCentral: number,
      yCentral: number,
      direcaoX: number,
      direcaoY: number,
      velocidade: number,
    ) {
      const raio = limitar(3 + velocidade * 1.2, 3, 5.4);
      const comprimento = raio * limitar(1.22 + velocidade * 0.48, 1.25, 1.9);
      const larguraDaEsteira = raio * 0.82;
      const forca = limitar(3.4 + velocidade * 5.6, 3.6, 10.5);
      const perpendicularX = -direcaoY;
      const perpendicularY = direcaoX;
      const alcance = Math.ceil(comprimento + 2);

      for (let y = -alcance; y <= alcance; y += 1) {
        const posicaoY = Math.round(yCentral + y);

        if (posicaoY <= 1 || posicaoY >= altura - 2) {
          continue;
        }

        for (let x = -alcance; x <= alcance; x += 1) {
          const posicaoX = Math.round(xCentral + x);

          if (posicaoX <= 1 || posicaoX >= largura - 2) {
            continue;
          }

          const aoLongo = x * direcaoX + y * direcaoY;
          const transversal = x * perpendicularX + y * perpendicularY;
          const distancia =
            (aoLongo * aoLongo) / (comprimento * comprimento) +
            (transversal * transversal) / (larguraDaEsteira * larguraDaEsteira);

          if (distancia >= 1) {
            continue;
          }

          const indice = posicaoY * largura + posicaoX;
          const bordaSuave = Math.cos(Math.sqrt(distancia) * Math.PI * 0.5);
          const assimetria = 0.72 + ruido(posicaoX * 0.31, posicaoY * 0.29) * 0.5;
          const esteira = aoLongo < 0 ? 1 : 0.62;
          const deslocamento = forca * bordaSuave * assimetria * esteira;

          ondaAtual[indice] += deslocamento;
          ondaAnterior[indice] += deslocamento * 0.62;
        }
      }

      const recuoX = Math.round(xCentral - direcaoX * comprimento * 0.85);
      const recuoY = Math.round(yCentral - direcaoY * comprimento * 0.85);

      if (recuoX > 1 && recuoX < largura - 2 && recuoY > 1 && recuoY < altura - 2) {
        ondaAtual[recuoY * largura + recuoX] -= forca * 0.48;
      }
    }

    function propagar() {
      let maiorEnergia = 0;

      for (let y = 1; y < altura - 1; y += 1) {
        for (let x = 1; x < largura - 1; x += 1) {
          const indice = y * largura + x;
          const fluxo = fluxoDaAgua[indice];
          const vizinhos =
            ondaAtual[indice - 1] * (1 + fluxo) +
            ondaAtual[indice + 1] * (1 - fluxo) +
            ondaAtual[indice - largura] * (1 - fluxo * 0.65) +
            ondaAtual[indice + largura] * (1 + fluxo * 0.65);
          const valorBruto =
            (vizinhos * velocidadeDaAgua[indice] - ondaAnterior[indice]) *
            absorcaoDasBordas[indice];
          const valor = valorBruto / (1 + Math.abs(valorBruto) * 0.0035);

          proximaOnda[indice] = valor;
          maiorEnergia = Math.max(maiorEnergia, Math.abs(valor));
        }
      }

      const temporaria = ondaAnterior;
      ondaAnterior = ondaAtual;
      ondaAtual = proximaOnda;
      proximaOnda = temporaria;

      return maiorEnergia;
    }

    function desenhar() {
      if (!imagem) {
        return 0;
      }

      const pixels = imagem.data;
      const raioDoBrilho = Math.max(28, largura * 0.1);
      let maiorEnergia = 0;

      pixels.fill(0);

      for (let y = 1; y < altura - 1; y += 1) {
        for (let x = 1; x < largura - 1; x += 1) {
          const indice = y * largura + x;
          const alturaDaOnda = ondaAtual[indice];
          const inclinacaoX = ondaAtual[indice - 1] - ondaAtual[indice + 1];
          const inclinacaoY = ondaAtual[indice - largura] - ondaAtual[indice + largura];
          const energia =
            Math.abs(alturaDaOnda) * 0.02 +
            Math.abs(inclinacaoX) * 0.038 +
            Math.abs(inclinacaoY) * 0.034;
          const distanciaDoMouse = Math.hypot(x - cursorX, y - cursorY);
          const brilhoLocal =
            Math.max(0, 1 - distanciaDoMouse / raioDoBrilho) * intensidadeDoBrilho;

          maiorEnergia = Math.max(maiorEnergia, energia);

          if (energia < 0.003 && brilhoLocal < 0.003) {
            continue;
          }

          const variacao = limitar(
            0.5 + (x - cursorX) / (raioDoBrilho * 1.8) + alturaDaOnda * 0.012,
            0,
            1,
          );
          const cor = corDoGradiente(variacao);
          const reflexo = limitar((inclinacaoX - inclinacaoY) * 0.042, 0, 0.3);
          const indiceDoPixel = indice * 4;

          pixels[indiceDoPixel] = interpolar(cor[0], 255, reflexo);
          pixels[indiceDoPixel + 1] = interpolar(cor[1], 255, reflexo);
          pixels[indiceDoPixel + 2] = interpolar(cor[2], 255, reflexo);
          pixels[indiceDoPixel + 3] = Math.round(
            limitar(energia * 112 + brilhoLocal * 16, 0, 128),
          );
        }
      }

      contextoAtivo.putImageData(imagem, 0, 0);
      return maiorEnergia;
    }

    function animar() {
      intensidadeDoBrilho += ((mouseDentro ? 1 : 0) - intensidadeDoBrilho) * 0.085;
      const energiaPropagada = propagar();
      const energiaDesenhada = desenhar();

      if (mouseDentro || intensidadeDoBrilho > 0.01 || Math.max(energiaPropagada, energiaDesenhada) > 0.018) {
        quadro = window.requestAnimationFrame(animar);
        return;
      }

      contextoAtivo.clearRect(0, 0, largura, altura);
      animando = false;
    }

    function iniciarAnimacao() {
      if (animando || reduzirMovimento.matches) {
        return;
      }

      animando = true;
      quadro = window.requestAnimationFrame(animar);
    }

    function atualizarMouse(evento: PointerEvent) {
      const caixaDaArea = areaAtiva.getBoundingClientRect();
      const caixaDoCanvas = canvasAtivo.getBoundingClientRect();
      const caixaDoTexto = textoAtivo.getBoundingClientRect();
      const xNaArea = evento.clientX - caixaDaArea.left;
      const yNaArea = evento.clientY - caixaDaArea.top;
      const xNoCanvas = evento.clientX - caixaDoCanvas.left;
      const yNoCanvas = evento.clientY - caixaDoCanvas.top;
      const novoX = (xNoCanvas / caixaDoCanvas.width) * largura;
      const novoY = (yNoCanvas / caixaDoCanvas.height) * altura;
      const agora = performance.now();

      areaAtiva.style.setProperty("--mouse-x", `${xNaArea}px`);
      areaAtiva.style.setProperty("--mouse-y", `${yNaArea}px`);
      areaAtiva.style.setProperty(
        "--wordmark-mouse-x",
        `${evento.clientX - caixaDoTexto.left}px`,
      );
      areaAtiva.style.setProperty(
        "--wordmark-mouse-y",
        `${evento.clientY - caixaDoTexto.top}px`,
      );
      cursorX = novoX;
      cursorY = novoY;

      if (!reduzirMovimento.matches) {
        if (ultimoPonto) {
          const deltaX = novoX - ultimoPonto.x;
          const deltaY = novoY - ultimoPonto.y;
          const distancia = Math.hypot(deltaX, deltaY);
          const tempo = Math.max(8, agora - ultimoPonto.momento);
          const direcaoX = distancia > 0.01 ? deltaX / distancia : 1;
          const direcaoY = distancia > 0.01 ? deltaY / distancia : 0;
          const velocidade = limitar(distancia / tempo, 0.05, 1.4);
          const passos = limitar(Math.ceil(distancia / 5), 1, 3);

          for (let passo = 1; passo <= passos; passo += 1) {
            const progresso = passo / passos;
            perturbarAgua(
              ultimoPonto.x + deltaX * progresso,
              ultimoPonto.y + deltaY * progresso,
              direcaoX,
              direcaoY,
              velocidade,
            );
          }
        } else {
          perturbarAgua(novoX, novoY, 1, 0, 0.2);
        }
      }

      ultimoPonto = { x: novoX, y: novoY, momento: agora };
      iniciarAnimacao();
    }

    function entrarNaAgua(evento: PointerEvent) {
      mouseDentro = true;
      areaAtiva.dataset.waterActive = "true";
      atualizarMouse(evento);
    }

    function sairDaAgua() {
      mouseDentro = false;
      ultimoPonto = null;
      areaAtiva.dataset.waterActive = "false";
      iniciarAnimacao();
    }

    redimensionar();

    const observador = new ResizeObserver(redimensionar);
    observador.observe(areaAtiva);
    areaAtiva.addEventListener("pointerenter", entrarNaAgua);
    areaAtiva.addEventListener("pointermove", atualizarMouse);
    areaAtiva.addEventListener("pointerleave", sairDaAgua);

    return () => {
      observador.disconnect();
      areaAtiva.removeEventListener("pointerenter", entrarNaAgua);
      areaAtiva.removeEventListener("pointermove", atualizarMouse);
      areaAtiva.removeEventListener("pointerleave", sairDaAgua);
      window.cancelAnimationFrame(quadro);
    };
  }, []);

  return (
    <footer
      ref={areaDaMarca}
      className="footer-editorial relative overflow-hidden"
      data-water-active="false"
    >
      <canvas ref={superficieDaAgua} className="footer-water-canvas" aria-hidden="true" />
      <div className="footer-brand-stage container-x relative z-10">
        <div className="footer-brand-hover">
          <p className="footer-wordmark">XE Software</p>
        </div>
      </div>
    </footer>
  );
}
