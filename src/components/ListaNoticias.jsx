import Noticia from "./Noticia";

const ListadoNoticias = ({ noticias }) => {
  return (
    <section className="sectionNews mx-auto my-5 rounded-2">
      <h3 className="py-3 text-center">Resultados</h3>
      <article className="py-5 containerCardsMovies border-top border-2 d-flex gap-4 flex-wrap justify-content-center px-2">
      {Array.isArray(noticias) && noticias?.map((noticia, index) => (
          <Noticia key={index} noticia={noticia} />
        ))}
      </article>
    </section>
  );
};

export default ListadoNoticias;
