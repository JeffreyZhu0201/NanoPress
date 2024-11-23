import routerArray from "@/app/router/routerArray"

export default function NavigateBar(){


    return (
        <div className="flex flex-raw items-center w-full m-0 h-4 bg-slate-500 justify-between">
            <div  className="w-auto text-xs flex items-start">JeffreysBlog</div>
            <div  className="w-auto flex">
                {
                    routerArray.map((item,key) =>  <div key={key} className="flex hover:bg-slate-300 hover:text-slate-900 w-20 justify-center text-xs">{item}</div>)
                }
            </div>
            <div className="w-auto text-xs flex items-end">
                login
            </div>
        </div>
    )

}
