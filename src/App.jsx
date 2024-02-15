import Header from "./components/Header"
import List from "./components/List"
import arrList from "./store/store.js"
import Button from "./components/Button"


export default function App() {
  return(
    <div>
      <Header />
      <main>
        <section>
          <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam ea esse totam magni, optio perspiciatis tempore voluptatem pariatur repellendus dolor labore temporibus dolore enim, incidunt aperiam nihil expedita sunt est.</h3>
          <ul>
            <List title={arrList[0].title} description={arrList[0].description} />
            <List {...arrList[1]} />
            <List {...arrList[2]} />
          </ul>
        </section>
        <section>
          <h3>Івенти</h3>
          <Button />
        </section>
      </main>
    </div>
  )
}
