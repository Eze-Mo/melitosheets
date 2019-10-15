import { Request, Response, Express } from "express"
import { MercadolibreController } from '../controllers/meliController'
import { WooCommerceController } from '../controllers/woocomerceController'
import * as path from 'path'


export class Routes {
    public mercadolibreController: MercadolibreController = new MercadolibreController();
    public WooComerceController: WooCommerceController = new WooCommerceController();

    public routes(app:Express) : void {
        let rootDir:string[] = path.dirname(__filename).split(path.sep)
        rootDir.pop()
        rootDir.push('views')
        const viewPath:string =  rootDir.join('/')

        app.route('/')
        .get((req: Request, res: Response) => {
            
            res.status(200).sendFile('index.html',{root: viewPath})
        })

        app.route('/ml/login')
        .get(this.mercadolibreController.meliAutorize)
       
        app.route('/ml/get/categories')
        .get(this.mercadolibreController.meliGetProductCategories)

        app.route('/ml/get/users')
        .get(this.mercadolibreController.meliGetUsersByID)
        
        app.route('/ml/get/my-products')
        .get(this.mercadolibreController.meliGetAllUserProducts)

        app.route('/woo/products')
        .get(this.WooComerceController.wooGetProducts)
    }
}