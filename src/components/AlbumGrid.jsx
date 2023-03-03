import AlbumCard from "./AlbumCard";

const AlbumGrid = () => {
  return (
    <div>
      
      <div>
        <div className="grid gap-3 grid-cols-2 md:grid-cols-4">
          <AlbumCard width="md:w-8/12 w-10/12" />
          <AlbumCard width="md:w-8/12 w-10/12" />
          <AlbumCard width="md:w-8/12 w-10/12" />
          <AlbumCard width="md:w-8/12 w-10/12" />
        </div>
          
        <div className="grid grid-cols-1 ">
          <AlbumCard width="md:w-2/12 w-5/12" />
        </div>
          
      </div>
      
    </div>
  )
}

export default AlbumGrid;