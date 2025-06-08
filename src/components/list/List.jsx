import './list.scss'
import Card from "../Card/Card.jsx"
import {listData} from"../../lib/dummydata"

function List(){
  return (
    <div className='list'>
      {listData.map(item=>(
        <Card key={item.id} item={item}/>
      ))}
    </div>
  )
}

export default List