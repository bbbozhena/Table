import SearchInput from "@/components/search";

export default function Home() {
  return (
    <div className="mt-6">
      <div className="flex justify-between">
        <div className="flex items-center">
          <p className="ml-5">Show</p>
          <div>
            <input
              type="number"
              min="1"
              max="10"
              step="1"
              defaultValue="10"
              className="border rounded-md p-2 w-12 bg-light-counter-button mx-5"
            />
          </div>
          <p className="mr-5">entries</p>
          <SearchInput />
        </div>
        <div>
          <button className="bg-button-color text-white rounded-md p-2 font-bold">
            + Add Customers
          </button>
        </div>
      </div>
    </div>
  );
}
