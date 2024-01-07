import InputButton from "./InputButton";
import InputDes from "./InputDes";
import InputVal from "./InputVal";

import SelectType from "./SelectType";

export default function AddEntry(){
    return (
    <div className="border-b bg-gray-100 py-3">
      <div className="mx-auto max-w-xl px-5">
        <form className="flex gap-2">
            <SelectType></SelectType>

            <InputDes></InputDes>

            <InputVal></InputVal>

            <InputButton></InputButton>


        </form>
      </div>
    </div>
    )
}