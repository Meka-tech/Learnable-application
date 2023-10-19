const breakpoints: { [index: string]: number } = {
  sm: 500,
  md: 768,
  lg: 1024,
  xl: 1200,
  xxl: 1201
};

export const mq = Object.keys(breakpoints)
  .map((key) => [key, breakpoints[key]] as [string, number])
  .reduce((prev, [key, breakpoint]) => {
    prev[key] = `@media (min-width: ${breakpoint}px)`;
    return prev;
  }, {} as { [index: string]: string });

//   const Container = styled.div`
//   ${mq["sm"]} {
//     max-width: 750px;
//   }
//   ${mq["md"]} {
//     max-width: 970px;
//   }
//   ${mq["lg"]} {
//     max-width: 1170px;
//   }
// `;
