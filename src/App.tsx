import { Header } from './components/header'
import {Form} from './components/forms'
import { InfoItems } from './components/infoitems'
export function App() {
  return (
    <>
      <Header/>
      <InfoItems 
        title="SAIBA MAIS SOBRE O EVENTO" 
        local = "Fenda do Bikini"
        hour = "18:30"
        data = "19/03/2026"
        />
      <Form/>
    </>
  )
}

