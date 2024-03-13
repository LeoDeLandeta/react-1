import { ArticlesContainer } from "./componentes/ArticlesContainer"
import { Header } from "./componentes/Header"

import { MainArticle } from "./componentes/MainArticle"

import { NewContainer } from "./componentes/NewContainer"



function App() {
  

  return (
    <main className="px-4 pt-6">
     <Header />
     <div className="lg:flex lg:gap-8">
        <MainArticle />
        <NewContainer />
     </div>

     <ArticlesContainer />
    </main>
  )
}

export default App
