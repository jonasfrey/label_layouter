import { readCSV } from "https://deno.land/x/csv/mod.ts";

// let s_name_file = './1ligne.csv';
let s_name_file = './2lignes.csv';
const f = await Deno.open(s_name_file);
let o_csv = (readCSV(f));

let a_s_prop = [] 
let a_a_v = [];

let n_idx = 0;
for await (const row of o_csv) {
    console.log("row:");
    let a_v = [];
    for await (const cell of row) {
        if(n_idx == 0){
            a_s_prop.push(cell)
        }else{
            a_v.push(cell)
        }
        console.log(`  cell: ${cell}`);
    }
    a_a_v.push(a_v)
    n_idx+=1
}

console.log(a_s_prop)
console.log(a_a_v)
let o = {
    a_o: a_a_v.filter(a_v=>a_v.length >0).map(a_v=>{
        return Object.assign(
            {}, 
            ...a_v.map((v, n_idx)=>{
                return {
                    [a_s_prop[n_idx]] : v
                }
            })
        )
    })
}
console.log(o)
Deno.writeTextFile(s_name_file+'.json', JSON.stringify(o, null, 4))