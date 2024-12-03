export const TechIcon = ({ component }) => {
  const Component = component;
  return (
    <>
      <Component className="size-10 fill-[url(#tech-icon-gradient)]" />
      <svg className="size-0 absolute">
        <linearGradient id="tech-icon-gradient">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#38bdf8" />
        </linearGradient>
      </svg>
    </>
  );
};