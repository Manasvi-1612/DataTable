import { DataTable } from "@/components/shared/DataTable"
import { AddProduct } from "./components/shared/AddProduct"
import { Filter } from "@/components/shared/Filter"

function App() {

  return (
    <>
      <section className="container flex flex-col gap-5">
        <h1 className="text-2xl font-semibold">Products</h1>
        <div className="flex justify-between">
          <Filter />
          <AddProduct />
        </div>
        <DataTable />
      </section>
    </>
  )
}

export default App
