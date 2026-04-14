function Article({
  titulo,
  autor,
  data,
  dataFormatada,
  conteudo,
  imagem,
  imagemAlt,
  legenda,
}) {
  return (
    <article className="post-card">
      <div className="post-meta">
        <p className="post-author">Por {autor}</p>
        <time dateTime={data}>{dataFormatada}</time>
      </div>

      <h2>{titulo}</h2>

      {conteudo.map((paragrafo) => (
        <p key={paragrafo}>{paragrafo}</p>
      ))}

      <figure>
        <img src={imagem} alt={imagemAlt} />
        <figcaption>{legenda}</figcaption>
      </figure>
    </article>
  )
}

export default Article
