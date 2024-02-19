import CardProject from "@/components/CardProject"
import arrList from "@/store/store.js"

export default function SectionCards() {
  return(
    <section>
      <h4 style={{ color: '#123123' }}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam ea esse totam magni, optio perspiciatis tempore voluptatem pariatur repellendus dolor labore temporibus dolore enim, incidunt aperiam nihil expedita sunt est.
      </h4>
      <div className="d-flex gap-4 flex-wrap">
        {arrList.map((card) => 
          <CardProject key={card.title} {...card}/>)}
      </div>
    </section>
  )
}