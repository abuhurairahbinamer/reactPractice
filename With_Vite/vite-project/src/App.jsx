import { useState } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Footer from './components/footer/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
   <Navbar/>
   </Router>
   <p style={{marginBottom:55}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem quis assumenda magni similique fugiat maxime autem quo, non quibusdam, saepe in quaerat magnam quam excepturi rem delectus nam necessitatibus unde esse ipsa? Quisquam impedit, voluptas facilis tempora saepe officia. Neque corrupti tenetur recusandae consequatur delectus saepe aperiam illum repudiandae blanditiis dolores est ipsum natus nemo voluptas quasi, voluptates facere perspiciatis dolorem itaque fugiat sequi! Atque, iure animi optio doloremque enim tempora alias velit aliquam numquam. Iste atque nulla possimus dolorem amet aliquid, illo fugit quae sed commodi veritatis ea accusantium ipsa dolor id inventore? Aut illum aliquam incidunt ducimus fuga esse aperiam corporis nisi modi, et fugit quidem molestiae laboriosam, quod labore! Incidunt doloremque repellat vitae nisi minima quos corrupti tempora laboriosam provident vero rerum quam, fugit eligendi ullam plnditiis nemo cum quas eveniet praesentium culpa, facere ipsam quasi unde. Nam amet animi architecto soluta? Aspernatur assumenda quas facilis odio enim inventore laudantium alias quam, animi voluptate itaque sapiente nam consectetur. Distinctio nihil quasi repellat sequi asperiores molestias doloremque, id, necessitatibus nam explicabo pariatur unde iste quos suscipit a hic ipdantium esse, repudiandae placeat laboriosam nihil dicta accusamus vias eveniet placeat adipisci commodi obcaecati recusandae quaerat. Placeat a nihil minima soluta? Culpa possimus, maxime officiis cumque accusantium tempore ex incidunt quia consectetur praesentium rem expedita inventore consequatur asperiores, non corporis magni omnis? Obcaecati molestiae labore, facilis distinctio, quasi voluptates voluptatum amet nobis consequatur quisquam accusamus, corporis esse itaque quibusdam nulla vitae cupiditate quod deleniti possimus. Repudiandae numquam, dignissimos, veniam repellat fugiat molestias voluptatem facilis recusandae voluptas nam minima? Laudantium aspernatur rem numquam, cumque laborum itaque molestiae officia debitis est aperiam. Voluptas sit est eaque obcaecati quidem inventore praesentium vero a error repellendus quasi teincidunt atque nesciunt!
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita asperiores suscipit eaque, doloremque repudiandae officia minima illo in sunt, quo animi libero culpa consequuntur, nobis cumque sed ut necessitatibus error voluptas? Ad inventore laudantium nostrum nobis itaque veniam assumenda dolor, tenetur quaerat voluptate culpa iure praesentium hic velit at molestiae voluptates quidem, deleniti dolores saepe recusandae! Voluptatem nesciunt deserunt quae minus consectetur distinctio tenetur illo nostrum debitis, perferendis quisquam! Sint corrupti dolore ea maiores inventore doloremque quas labore saepe, placeat, odio voluptatibus iusto mollitia, animi harum quia unde nam possimus nesciunt! Vitae voluptas, quibusdam est perspiciatis in sequi rem repudiandae? Tempora iusto illo excepturi necessitatibus, magni doloremque animi commodi! Suscipit ea totam iure placeat ipsum earum sed dignissimos facere saepe consequuntur molestias culpa dolore pariatur autem quisquam asperiores, est a tempore libero aperiam, ad aliquid iusto hic. Autem quam quas aut blanditiis. Velit illum, quidem laboriosam impedit iste corporis ipsum alias laudantium praesentium similique repellat labore suscipit voluptate repellendus rem. Debitis, tempore doloremque error praesentium nostrum quae inventore illum possimus labore quisquam, molestias iusto quidem optio tenetur beatae adipisci, ducimus voluptates iure temporibus! Ipsa dignissimos aliquam maiores, dolore voluptate sequi ea aspernatur exercitationem molestiae. Deserunt perspiciatis commodi odit non maxime.
  
   </p>
   <Footer/>
    </>
  )
}

export default App
