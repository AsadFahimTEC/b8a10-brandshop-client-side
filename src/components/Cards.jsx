

const Cards = () => {
    return (
       
        <div className="mt-4">
            <div className="text-center p-10">
          <h1 className="font-bold text-4xl mb-4">Our Beverage Product</h1>
        </div>
        
       
        <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        
          
          <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <a href="#">
              <img src="https://i.ibb.co/0FPj0Jn/photo-1624552184280-9e9631bbeee9.png" alt="coc" className="h-80 w-72 object-cover rounded-t-xl" />
              <div className="px-4 py-3 w-72">
                <span className="text-gray-400 mr-3 uppercase text-xs">Coke</span>
                <p className="text-lg font-bold text-black truncate block capitalize">Coca-Cola</p>
                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black cursor-auto my-3">$1.40</p>
                  <del>
                    <p className="text-sm text-gray-600 cursor-auto ml-2">$2</p>
                  </del>
                  <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                    </svg></div>
                </div>
              </div>
            </a>
          </div>
       
          <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <a href="#">
              <img src="https://i.ibb.co/xF7t2Xt/photo-1596769968821-6d3bf5e8f50a-auto-format-fit-max-q-80-crop-faces-edges-cs-tinysrgb-fm-jpg-ixid-M.jpg" alt="fries" className="h-80 w-72 object-cover rounded-t-xl" />
              <div className="px-4 py-3 w-72">
                <span className="text-gray-400 mr-3 uppercase text-xs">McDonald's</span>
                <p className="text-lg font-bold text-black truncate block capitalize"> Fries</p>
                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black cursor-auto my-3">$1.50</p>
                  <del>
                    <p className="text-sm text-gray-600 cursor-auto ml-2">$3.50</p>
                  </del>
                  <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"className="bi bi-bag-plus" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                    </svg></div>
                </div>
              </div>
            </a>
          </div>
        
          
          <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <a href="#">
              <img src="https://i.ibb.co/kJG3vZN/photo-1592321675774-3de57f3ee0dc-auto-format-fit-max-q-80-crop-faces-edges-cs-tinysrgb-fm-jpg-ixid-M.jpg" alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
              <div className="px-4 py-3 w-72">
                <span className="text-gray-400 mr-3 uppercase text-xs">Starbucks</span>
                <p className="text-lg font-bold text-black truncate block capitalize">Coffee Cup</p>
                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black cursor-auto my-3">$14</p>
                  <del>
                    <p className="text-sm text-gray-600 cursor-auto ml-2">$26</p>
                  </del>
                  <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                    </svg></div>
                </div>
              </div>
            </a>
          </div>
          
        
          
          <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <a href="#">
              <img src="https://i.ibb.co/k0M2CbR/photo-1553456558-aff63285bdd1-auto-format-fit-max-q-80-crop-faces-edges-cs-tinysrgb-fm-jpg-ixid-M3wx.jpg" alt="pepsi" className="h-80 w-72 object-cover rounded-t-xl" />
              <div className="px-4 py-3 w-72">
                <span className="text-gray-400 mr-3 uppercase text-xs">PepsiCo</span>
                <p className="text-lg font-bold text-black truncate block capitalize">Pepsi</p>
                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black cursor-auto my-3">$1.25</p>
                  <del>
                    <p className="text-sm text-gray-600 cursor-auto ml-2">$2.40</p>
                  </del>
                  <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                    </svg></div>
                </div>
              </div>
            </a>
          </div>
          
        
          
          <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <a href="#">
              <img src="https://i.ibb.co/HdfRPXG/photo-1574183878891-e08ec44abc37-auto-format-fit-max-q-80-crop-faces-edges-cs-tinysrgb-fm-jpg-ixid-M.jpg" alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
              <div className="px-4 py-3 w-72">
                <span className="text-gray-400 mr-3 uppercase text-xs"> Nestlé</span>
                <p className="text-lg font-bold text-black truncate block capitalize">Kitkat</p>
                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black cursor-auto my-3">$0.80</p>
                  <del>
                    <p className="text-sm text-gray-600 cursor-auto ml-2">$1.99</p>
                  </del>
                  <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                    </svg></div>
                </div>
              </div>
            </a>
          </div>
          
        
          
          <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <a href="#">
              <img src="https://i.ibb.co/Xb6fFgp/photo-1624798911782-f3766deb4aec-auto-format-fit-max-q-80-crop-faces-edges-cs-tinysrgb-fm-jpg-ixid-M.jpg" alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
              <div className="px-4 py-3 w-72">
                <span className="text-gray-400 mr-3 uppercase text-xs">Kellogg's</span>
                <p className="text-lg font-bold text-black truncate block capitalize">Corn Flakes</p>
                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black cursor-auto my-3">$3.20</p>
                  <del>
                    <p className="text-sm text-gray-600 cursor-auto ml-2">$5.70</p>
                  </del>
                  <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                    </svg></div>
                </div>
              </div>
            </a>
          </div>
         
        
        </section>
        </div>
        
        
        
      
    );
};

export default Cards;