/**TypeScriptの基本の型 */
// boolean
let bool: boolean = true;

//number 数値
let num: number = 0;

//string 文字
let str: string = "A";

//Array 配列
let arr1: Array<number> = [0, 1, 2];
let arr2: number[] = [0, 1, 2];

//tuple あまり使わない
let tuple: [number, string] = [0, "A"];

//any あまり使わない
let any1: any = false;

//void 返り値が無いときは自動で設定される
const funcA = (): void => {
  const test = "TEST";
};

//null
let null1: null = null;

//undefaide
let undefined1: undefined = undefined;

//object　オブジェクトを設定するときによく使う
let obj1: object = {};
let obj2: { id: number; name: string } = { id: 0, name: "Wataru" };
