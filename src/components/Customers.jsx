

const Customers = () => {
    return (
        <div>
            <section className="my-8">
        <h2 className="text-2xl font-semibold text-center">Our Customers</h2>
        <div>
          <div className="flex flex-col my-4">
            <div className="m-2">
              <div className="component flex">
                <div className="w-full p-8 shadow-lg rounded-lg bg-gray-100 relative">
                  <table className="w-full text-left">
                    <thead>
                      <tr>
                        <th className="pb-6 text-gray-500 text-sm tracking-wide">Employee</th>
                        <th className="pb-6 text-gray-500 text-sm tracking-wide">Joining Date</th>
                        <th className="pb-6 text-gray-500 text-sm tracking-wide">Manager</th>
                        <th className="pb-6 text-gray-500 text-sm tracking-wide">Payment</th>
                        <th className="pb-6 text-gray-500 text-sm tracking-wide">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="">
                        <td className="py-3">
                          <div className="flex">
                            <div className="w-12 h-12 bg-cover rounded-lg" style={{backgroundImage: "url(https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=256&amp;q=80&quot;)"}}></div>
                            <div className="leading-none ml-5 flex flex-col justify-around">
                              <div className="tracking-wide font-bold">Tricia Matthew</div>
                              <div className="text-xs text-gray-600">tricia@templatana.com</div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="leading-none flex flex-col justify-center">
                            <div className="font-bold text-sm">2020</div>
                            <div className="mt-2 text-xs text-gray-600">19 Jan</div>
                          </div>
                        </td>
                        <td>
                          <div className="leading-none flex flex-col justify-center">
                            <div className="font-bold text-sm">Garret Walker</div>
                            <div className="mt-2 text-xs text-gray-600">garret@templatana.com</div>
                          </div>
                        </td>
                        <td>
                          <div className="text-sm text-gray-400"><span className="font-black text-indigo-500">$120</span><span className="font-medium">/700</span><span className="block text-gray-500 font-bold text-xs">Partially Paid</span></div>
                        </td>
                        <td>
                          <div className="">
                            <div className="text-center px-4 py-2 text-xs font-bold rounded opacity-75 bg-yellow-200 text-yellow-700">Part Time</div>
                          </div>
                        </td>
                      </tr>
                      <tr className="">
                        <td className="py-3">
                          <div className="flex">
                            <div className="w-12 h-12 bg-cover rounded-lg" style={{backgroundImage: "url(https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=256&amp;q=80&quot;)"}}></div>
                            <div className="leading-none ml-5 flex flex-col justify-around">
                              <div className="tracking-wide font-bold">Sparsh Chan</div>
                              <div className="text-xs text-gray-600">sparsh@templatana.com</div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="leading-none flex flex-col justify-center">
                            <div className="font-bold text-sm">2011</div>
                            <div className="mt-2 text-xs text-gray-600">12 Feb</div>
                          </div>
                        </td>
                        <td>
                          <div className="leading-none flex flex-col justify-center">
                            <div className="font-bold text-sm">Himali Turn</div>
                            <div className="mt-2 text-xs text-gray-600">himali@templatana.com</div>
                          </div>
                        </td>
                        <td>
                          <div className="text-sm text-gray-400"><span className="font-black text-indigo-500">$1200</span><span className="font-medium hidden">/1200</span><span className="block text-gray-500 font-bold text-xs">Completely Paid</span></div>
                        </td>
                        <td>
                          <div className="">
                            <div className="text-center px-4 py-2 text-xs font-bold rounded opacity-75  bg-indigo-200 text-indigo-700">Full Time</div>
                          </div>
                        </td>
                      </tr>
                      <tr className="">
                        <td className="py-3">
                          <div className="flex">
                            <div className="w-12 h-12 bg-cover rounded-lg" style={{backgroundImage: "url(https://images.unsplash.com/photo-1562124638-724e13052daf?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=256&amp;q=80&quot;)"}}></div>
                            <div className="leading-none ml-5 flex flex-col justify-around">
                              <div className="tracking-wide font-bold">Frank Kern</div>
                              <div className="text-xs text-gray-600">sparsh@templatana.com</div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="leading-none flex flex-col justify-center">
                            <div className="font-bold text-sm">2019</div>
                            <div className="mt-2 text-xs text-gray-600">28 Feb</div>
                          </div>
                        </td>
                        <td>
                          <div className="leading-none flex flex-col justify-center">
                            <div className="font-bold text-sm">Himali Turn</div>
                            <div className="mt-2 text-xs text-gray-600">himali@templatana.com</div>
                          </div>
                        </td>
                        <td>
                          <div className="text-sm text-gray-400"><span className="font-black">$0</span><span className="font-medium">/700</span><span className="block text-gray-500 font-bold text-xs">Unpaid</span></div>
                        </td>
                        <td>
                          <div className="">
                            <div className="text-center px-4 py-2 text-xs font-bold rounded opacity-75 bg-red-200 text-red-700">Terminated</div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> 
        </div>
    );
};

export default Customers;