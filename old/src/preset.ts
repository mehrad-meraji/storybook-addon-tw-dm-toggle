function managerEntries({entry = []}: { entry?: any[] }) {
  return [...entry, require.resolve('./src/preset/register')]; //👈 Addon implementation
}

export default { managerEntries }