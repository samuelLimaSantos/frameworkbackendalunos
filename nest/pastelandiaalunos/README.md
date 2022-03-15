![Imgur](https://i.imgur.com/j9JmM4L.png)

# **Trilha Específica - Framework Backend**

## **Aula 2 - Equipe 1 - 15/03/2022**

- [Allan Garcia](https://github.com/)
- [Claudia Maia](https://github.com/)
- [Miguel Müller](https://github.com/miguelsmuller)
- [Samuel Santos](https://github.com/samuelLimaSantos)

## Informações do Database

docker run --name pastelandia-alunos-mysqldb -e MYSQL_DATABASE=pastelandia-alunos -e MYSQL_USER=pastelandia-alunos -e MYSQL_PASSWORD=my-ultra-password -e MYSQL_ROOT_PASSWORD=my-root-ultra-password -p 3306:3306 -d mysql:8.0.28

## Pastel

## Cliente

id
nome
email

## Pedido

id
numeroPedido
idCliente
valorTotal
valorDesconto
dataPedido

## PedidoItens

idPedido
idPastel
