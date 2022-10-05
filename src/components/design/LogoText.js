import { Link } from "react-router-dom"

const LogoText = () => {
  return (
    <div className="container flex">
        <div className="logoCont flex items-center justify-center h-4">
            <div className="spanLogo relative">
                <div className="textLogo relative inline-block text-transparent ease-linear duration-150 whitespace-nowrap">
                    <Link to={'/'}>chic store</Link>
                </div>
            </div>
        </div>
    </div>
  )
}
export default LogoText