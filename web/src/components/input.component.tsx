import { Search } from 'lucide-react'

export const SearchInput = () => {
  return (
    <div className="flex justify-center">
      <div className="max-w-sm-[300px] flex w-[700px] space-x-4 rounded border bg-gray-500 p-2">
        <>
          <Search fill="#fff" />
          <input
            className="h-full w-full rounded  bg-gray-500 text-gray-100 placeholder-gray-200 outline-0"
            placeholder="Digite o nome do produto que deseja buscar..."
          />
        </>
      </div>
    </div>
  )
}
