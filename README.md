# squadstore
Uma API em Java e Spring Framework , Spring JPA + Postges de uma loja virtual.
## Como a api deve funcionar?
Nossa api deve responder as informações de uma loja virtual

A API terá os seguintes endpoints:

<p><code>/users</code></p>
<p><code>/products</code></p>
<p><code>/orders</code></p>
<p><code>/categories</code></p>

<p> As principais requisições são:</p>
<p><code>GET/products: Lista todos os produtos cadastrados.</code></p>
<p><code>GET/products/{id}: Retorna as informações de um produto.</code></p>
<p><code>POST/users/{id}: Retorna as informações de um produto.</code></p>
<p><code>DELETE/users/{id}: Retorna as informações de um produto.</code></p>
<p><code>PUT/users/{id}: Retorna as informações de um produto.</code></p>


## Domain Model:
<img src="domainModel.png" style="max-width:80%">

## Domain Instance:
<img src="domainInstance.png" style="max-width:80%">

## Logical Layer:
<img src="LogicalLayer.png" style="max-width:80%">
