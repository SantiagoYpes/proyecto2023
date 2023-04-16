const Profile = () => {
  return (
    <div className="min-h-screen  justify-center bg-gray-100">
      <div class="max-w-2xl mx-auto px-4 py-8">
        <div class="bg-white rounded-lg shadow-lg">
          <div class="flex items-center justify-center bg-[#1F6768] rounded-t-lg px-4 py-8">
            <img
              class="w-32 h-32 rounded-full border-4 border-white"
              src="https://via.placeholder.com/150"
              alt="Foto de Perfil"
            />
          </div>
          <div class="px-6 py-4">
            <h2 class="text-2xl font-bold text-gray-800">Perfil del docente</h2>
            <p class="text-gray-600"></p>
          </div>
          <div class="px-6 py-4">
            <form class="space-y-4">
              <div>
                <label for="nombre" class="block text-gray-800 font-bold mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none hover:border-[#1F6768] text-[#000000]"
                  value="Nombre del docente"
                />
              </div>
              <div>
                <label for="nombre" class="block text-gray-800 font-bold mb-2">
                  Apellidos
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none hover:border-[#1F6768] text-[#000000]"
                  value="Apellidos del docente"
                />
              </div>
              <div>
                <label for="nombre" class="block text-gray-800 font-bold mb-2">
                  Cédula
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none hover:border-[#1F6768] text-[#000000]"
                  value="Cédula del docente"
                />
              </div>
              <div>
                <label for="nombre" class="block text-gray-800 font-bold mb-2">
                  Celular
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none hover:border-[#1F6768] text-[#000000]"
                  value="Celular del docente"
                />
              </div>
              <div>
                <label for="nombre" class="block text-gray-800 font-bold mb-2">
                  Correo electrónico
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none hover:border-[#1F6768] text-[#000000]"
                  value="Correo del docente"
                />
              </div>
              <div class="relative">
                <label for="nombre" class="block text-gray-800 font-bold mb-2">
                  Valor de la hora
                </label>
                <span class="absolute left-3 bottom-2.5 text-[#000000]">$</span>
                <input
                  type="text"
                  inputmode="numeric"
                  pattern="[0-9]*"
                  id="phone"
                  class="w-full px-3 py-2 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:border-[#1F6768] text-[#000000]"
                  placeholder="Ingrese su valor"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-[#1F6768] hover:bg-[#EE2737] text-white rounded-md font-semibold focus:outline-none"
              >
                Actualizar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
<div className="min-h-screen  justify-center bg-gray-100">
  <div class="max-w-2xl mx-auto px-4 py-8">
    <div class="bg-white rounded-lg shadow-lg">
      <div class="flex items-center justify-center bg-[#1F6768] rounded-t-lg px-4 py-8">
        <img
          class="w-32 h-32 rounded-full border-4 border-white"
          src="https://via.placeholder.com/150"
          alt="Foto de Perfil"
        />
      </div>
      <div class="px-6 py-4">
        <h2 class="text-2xl font-bold text-gray-800">Perfil del docente</h2>
        <p class="text-gray-600"></p>
      </div>
      <div class="px-6 py-4">
        <form class="space-y-4">
          <div>
            <label for="nombre" class="block text-gray-800 font-bold mb-2">
              Nombre
            </label>
            <input
              type="text"
              id="firstName"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none hover:border-[#1F6768] text-[#000000]"
              value="Nombre del docente"
            />
          </div>
          <div>
            <label for="nombre" class="block text-gray-800 font-bold mb-2">
              Apellidos
            </label>
            <input
              type="text"
              id="firstName"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none hover:border-[#1F6768] text-[#000000]"
              value="Apellidos del docente"
            />
          </div>
          <div>
            <label for="nombre" class="block text-gray-800 font-bold mb-2">
              Cédula
            </label>
            <input
              type="text"
              id="firstName"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none hover:border-[#1F6768] text-[#000000]"
              value="Cédula del docente"
            />
          </div>
          <div>
            <label for="nombre" class="block text-gray-800 font-bold mb-2">
              Celular
            </label>
            <input
              type="text"
              id="firstName"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none hover:border-[#1F6768] text-[#000000]"
              value="Celular del docente"
            />
          </div>
          <div>
            <label for="nombre" class="block text-gray-800 font-bold mb-2">
              Correo electrónico
            </label>
            <input
              type="text"
              id="firstName"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none hover:border-[#1F6768] text-[#000000]"
              value="Correo del docente"
            />
          </div>
          <div class="relative">
            <label for="nombre" class="block text-gray-800 font-bold mb-2">
              Valor de la hora
            </label>
            <span class="absolute left-3 bottom-2.5 text-[#000000]">$</span>
            <input
              type="text"
              inputmode="numeric"
              pattern="[0-9]*"
              id="phone"
              class="w-full px-3 py-2 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:border-[#1F6768] text-[#000000]"
              placeholder="Ingrese su valor"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#1F6768] hover:bg-[#EE2737] text-white rounded-md font-semibold focus:outline-none"
          >
            Actualizar
          </button>
        </form>
      </div>
    </div>
  </div>
</div>;

export default Profile;
