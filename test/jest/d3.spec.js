const d3 = require("d3");
const d3Array = require("d3-array");
it(`It returns a map from key to the corresponding array of values from the input`, () => {
  const athletes = [
    {
      name: "Floyd Mayweather",
      sport: "Boxing",
      nation: "United States",
      earnings: 285
    },
    {
      name: "Lionel Messi",
      sport: "Soccer",
      nation: "Argentina",
      earnings: 111
    },
    {
      name: "Cristiano Ronaldo",
      sport: "Soccer",
      nation: "Portugal",
      earnings: 108
    },
    { name: "Conor McGregor", sport: "MMA", nation: "Ireland", earnings: 99 },
    { name: "Neymar", sport: "Soccer", nation: "Brazil", earnings: 90 },
    {
      name: "LeBron James",
      sport: "Basketball",
      nation: "United States",
      earnings: 85.5
    },
    {
      name: "Roger Federer",
      sport: "Tennis",
      nation: "Switzerland",
      earnings: 77.2
    },
    {
      name: "Stephen Curry",
      sport: "Basketball",
      nation: "United States",
      earnings: 76.9
    },
    {
      name: "Matt Ryan",
      sport: "Football",
      nation: "United States",
      earnings: 67.3
    },
    {
      name: "Matthew Stafford",
      sport: "Football",
      nation: "United States",
      earnings: 59.5
    }
  ];
  const athletesBySport = d3Array.group(athletes, d => d.sport);
  const sports = athletes.map(item => item.sport);
  expect(athletesBySport).toBeInstanceOf(Map);
  //   expect(athletesBySport).toEqual(new Map(sports));
});
it(`Returns a function for generating random numbers with a normal (Gaussian) distribution. The expected value of the generated numbers is mu, with the given standard deviation sigma. If mu is not specified, it defaults to 0; if sigma is not specified, it defaults to 1.`, () => {
  const random = d3.randomNormal(); // Try randomUniform?
  expect(random())
    .toBeGreaterThan(-1)
    .toBeLessThan(2);
});
