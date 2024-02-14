import Header from "./components/Header"
import PropTypes from 'prop-types'

const arrList = [{
  title: '1111',
  description: '1Lorem Ips'
},
{
  title: '2222',
  description: '2Lorem Ips'
},
{
  title: '3333',
  description: '3Lorem Ips'
}
]
function Listli({ title, description }) {
  console.log(title, description)
  return (
    <li>
      <p>
        <strong>{title}</strong> {description}
      </p>
    </li>
  )
}

Listli.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default function App() {
  return(
    <div>
      <Header />
      <main>
        <section>
          <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam ea esse totam magni, optio perspiciatis tempore voluptatem pariatur repellendus dolor labore temporibus dolore enim, incidunt aperiam nihil expedita sunt est.</h3>
          <ul>
            <Listli title={arrList[0].title} description={arrList[0].description} ></Listli>
            <Listli {...arrList[1]} ></Listli>
            <Listli {...arrList[2]} ></Listli>
          </ul>
        </section>
      </main>
    </div>
  )
}
