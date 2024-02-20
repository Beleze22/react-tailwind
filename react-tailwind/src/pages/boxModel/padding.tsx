import Caixa from "@/components/Caixa";

export default function Padding() {
  return (
    <div className="flex-center h-screen gap-5">
      <Caixa className="px-5">#1</Caixa>
      <Caixa className="py-5">#2</Caixa>
      <Caixa className="pb-7 pl-5">#3</Caixa>
      <Caixa className="p-5">#4</Caixa>
      <Caixa className="p-[11px]">#5</Caixa>
    </div>
  );
}
