import { DataTable } from "@/components/shared/DataTable"
import { AddProduct } from "./components/shared/AddProduct"
import TypeFilter from "@/components/shared/TypeFilter"
import { SliderFilter } from "./components/shared/SliderFilter"

function App() {

  return (
    <>
      <section className="container flex flex-col gap-5">
        <h1 className="text-2xl font-semibold">Data Table</h1>
        <div className="grid grid-cols-3">
          <TypeFilter />
          <SliderFilter />
          <AddProduct />
        </div>
        <DataTable />
      </section>
    </>
  )
}

export default App
