function ResSuccess({data = null, status = 200, mensagem = "Sucesso!"}) {
  return { data, status, mensagem };
}
  
module.exports = ResSuccess;