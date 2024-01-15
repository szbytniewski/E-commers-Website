import React from "react";
import Navbar from "../components/reusable/navbar/navbar";
import LogoButton from "../components/reusable/homeImg/homeImg";
import ShoppingCart from "../components/reusable/cart/shoppingCart";

function Sizing() {
  return (
    <div className="bg-body text-text font-body min-h-screen flex flex-col items-center justify-center">
      <div className="flex gap-20">
        <div className="flex flex-col gap-10">
          <div>
            <LogoButton />
          </div>
          <div>
            <ShoppingCart />
          </div>
        </div>
        <div className="text-center p-4 max-w-2xl mx-auto">
          <h1 className="font-bold text-3xl">Sizing Page</h1>
          <div>shirts</div>
          <table className="mt-4 mx-auto">
            <tbody>
              <tr>
                <td className="border px-4 py-2"></td>
                <td className="border px-4 py-2">s</td>
                <td className="border px-4 py-2">m</td>
                <td className="border px-4 py-2">l</td>
                <td className="border px-4 py-2">xl</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">chest width</td>
                <td className="border px-4 py-2">58</td>
                <td className="border px-4 py-2">60</td>
                <td className="border px-4 py-2">62</td>
                <td className="border px-4 py-2">64</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">body length</td>
                <td className="border px-4 py-2">73</td>
                <td className="border px-4 py-2">75</td>
                <td className="border px-4 py-2">77</td>
                <td className="border px-4 py-2">79</td>
              </tr>
            </tbody>
          </table>
          <div>hoodies</div>
          <table className="mt-4 mx-auto">
            <tbody>
              <tr>
                <td className="border px-4 py-2"></td>
                <td className="border px-4 py-2">s</td>
                <td className="border px-4 py-2">m</td>
                <td className="border px-4 py-2">l</td>
                <td className="border px-4 py-2">xl</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">chest width</td>
                <td className="border px-4 py-2">56</td>
                <td className="border px-4 py-2">60</td>
                <td className="border px-4 py-2">64</td>
                <td className="border px-4 py-2">68</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">body length</td>
                <td className="border px-4 py-2">70</td>
                <td className="border px-4 py-2">72</td>
                <td className="border px-4 py-2">74</td>
                <td className="border px-4 py-2">75</td>
              </tr>
            </tbody>
          </table>
          <div>pants</div>
          <table className="mt-4 mx-auto">
            <tbody>
              <tr>
                <td className="border px-4 py-2"></td>
                <td className="border px-4 py-2">s</td>
                <td className="border px-4 py-2">m</td>
                <td className="border px-4 py-2">l</td>
                <td className="border px-4 py-2">xl</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">waist</td>
                <td className="border px-4 py-2">42</td>
                <td className="border px-4 py-2">44</td>
                <td className="border px-4 py-2">46</td>
                <td className="border px-4 py-2">48</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">length</td>
                <td className="border px-4 py-2">104</td>
                <td className="border px-4 py-2">106</td>
                <td className="border px-4 py-2">108</td>
                <td className="border px-4 py-2">110</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Navbar change={"/sizing"} />
    </div>
  );
}

export default Sizing;
