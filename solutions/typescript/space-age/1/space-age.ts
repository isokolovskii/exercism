type Planet = 'mercury' | 'venus' | 'earth' | 'mars' | 'jupiter' | 'saturn' | 'uranus' | 'neptune'

const ORBITAL_PERIOS: Record<Planet, number> = {
  'mercury': 0.2408467,
  'venus': 0.61519726,
  'earth': 1.0,
  'mars': 1.8808158,
  'jupiter': 11.862615,
  'saturn': 29.447498,
  'uranus': 84.016846,
  'neptune': 164.79132,
}

const SECONDS_IN_EARTH_YEAR = 31557600

export function age(planet: Planet, seconds: number): number {
  const earthYears = seconds / SECONDS_IN_EARTH_YEAR
  const years = earthYears / ORBITAL_PERIOS[planet]
  return parseFloat(years.toFixed(2))
}
