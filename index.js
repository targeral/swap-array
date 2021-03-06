const swapArray = (Arr, Caller, Target) => {
  let Instance = Arr.constructor()
  let Stash = Arr

  let InstanceType = Array.isArray(Instance) ? 'array' : typeof Instance

  if (InstanceType !== 'array') throw '[ERR] SwapArray expects a array as first param'

  Stash.map((s, i) => Instance[i] = s)

  Instance[Caller] = Instance.splice(Target, 1, Instance[Caller])[0]

  return Instance
}

export default swapArray
