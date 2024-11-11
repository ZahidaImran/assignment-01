export default function Loading(){
    return(
    <div className="flex items-center justify-center h-screen bg-gray-100">
  <div className="flex space-x-2">
    <div className="w-4 h-4 bg-blue-500 animate-ping"></div>
    <div className="w-4 h-4 bg-blue-500 animate-ping"></div>
    <div className="w-4 h-4 bg-blue-500 animate-ping"></div>
  </div>
  <span className="ml-3 text-lg font-semibold text-gray-700">Loading...</span>
</div>)
}