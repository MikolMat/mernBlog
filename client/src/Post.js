export default function Post(){
  return(
    <div className="post">
    <div className="image">
      <img src="https://www.lego.com/cdn/cs/set/assets/blt0254ea3dce736ea0/10305.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1" alt="lego castle" />
    </div>
    <div className="texts">
      <h2>Średniowieczna przygoda wzywa LEGO®</h2>
      <p className="info">
        <a className="author">Barnaba Strzalkowski</a>
        <time>2024-02-29 18:22</time>
      </p>
      <p className="summary">Opowieści o ekscytujących wyprawach
        Niesamowity zestaw jest pełen niespodzianek. Odkryj wspaniałe detale z każdej strony modelu do zbudowania, a następnie otwórz go, by zajrzeć do środka. 
      </p>
    </div>
  </div>
  )
}