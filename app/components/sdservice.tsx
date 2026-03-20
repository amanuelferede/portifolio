import Image from "next/image";
export default function SoftwareDevelopmentServices() {
  return (
    <div className="max-w-7xl mx-auto py-5">
      <p className="mb-10 md:text-6xl text-pink-400 text-center">
        Software developmenet services.
      </p>

      <div className="grid md:grid-cols-3 gap-5">
        <div className="md:h-65 bg-white h-50 md:hover:-translate-y-3 transition-all duration-400 ease-in-out p-6 md:rounded-xl md:shadow-xl shadow-md text-center flex items-center justify-center">
          <div className="flex flex-col space-y-2 items-center">
            <Image
              src={`/sw services/custom.png`}
              width={0}
              height={0}
              className="w-25 h-25"
              sizes="100vh"
              alt="web desgin"
            />
            <p className="font-semibold text-lg">Custom software solutions.</p>
          </div>
        </div>

        <div className="md:h-65 bg-white h-50 md:hover:-translate-y-3 transition-all duration-400 ease-in-out p-6 md:rounded-xl md:shadow-xl shadow-md text-center flex items-center justify-center">
          <div className="flex flex-col space-y-2 items-center">
            <Image
              src={`/sw services/computer.png`}
              width={0}
              height={0}
              className="w-25 h-25"
              sizes="100vh"
              alt="web desgin"
            />
            <p className="font-semibold text-lg">
              Business process automation tools.
            </p>
          </div>
        </div>

        {/** */}
        <div className="md:h-65 bg-white h-50 md:hover:-translate-y-3 transition-all duration-400 ease-in-out p-6 md:rounded-xl md:shadow-xl shadow-md text-center flex items-center justify-center">
          <div className="flex flex-col space-y-2 items-center">
            <Image
              src={`/sw services/profit-up.png`}
              width={0}
              height={0}
              className="w-25 h-25"
              sizes="100vh"
              alt="web desgin"
            />
            <p className="font-semibold text-lg">
              Inventory and sales amangement systems.
            </p>
          </div>
        </div>
        <div className="md:h-65 bg-white h-50 md:hover:-translate-y-3 transition-all duration-400 ease-in-out p-6 md:rounded-xl md:shadow-xl shadow-md text-center flex items-center justify-center">
          <div className="flex flex-col space-y-2 items-center">
            <Image
              src={`/sw services/customer-relationship-management.png`}
              width={0}
              height={0}
              className="w-25 h-25"
              sizes="100vh"
              alt="web desgin"
            />
            <p className="font-semibold text-lg">
              ERP and CRM software developmenet.
            </p>
          </div>
        </div>

        <div className="md:h-65 bg-white h-50 md:hover:-translate-y-3 transition-all duration-400 ease-in-out p-6 md:rounded-xl md:shadow-xl shadow-md text-center flex items-center justify-center">
          <div className="flex flex-col space-y-2 items-center">
            <Image
              src={`/sw services/app-development.png`}
              width={0}
              height={0}
              className="w-25 h-25"
              sizes="100vh"
              alt="web desgin"
            />
            <p className="font-semibold text-lg">
              Mobile app development (Android and Ios).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
