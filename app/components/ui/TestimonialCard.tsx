export function TestimonialCard({
  testimonial,
}: {
  testimonial: { quote: string; name: string; role: string; avatar: string };
}) {
  return (
    <figure className="brand-card rounded-card p-6 md:p-8">
      <div className="grid size-12 place-items-center rounded-pill bg-accent-soft font-mono text-sm font-semibold text-accent">
        {testimonial.avatar}
      </div>
      <blockquote className="mt-8 text-xl font-medium leading-8 text-ink md:text-2xl">
        "{testimonial.quote}"
      </blockquote>
      <figcaption className="mt-8">
        <p className="font-medium">{testimonial.name}</p>
        <p className="text-sm text-ink-soft">{testimonial.role}</p>
      </figcaption>
    </figure>
  );
}
