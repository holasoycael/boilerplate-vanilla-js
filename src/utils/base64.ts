function decode(base64: string) {
  const buff = Buffer.from(base64, 'base64')
  return buff.toString('ascii')
}

function encode(base64: string) {
  const buff = Buffer.from(base64)
  return buff.toString('base64')
}

export default { encode, decode }
