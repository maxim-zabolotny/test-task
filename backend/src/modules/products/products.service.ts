// import { Injectable, Inject, Body } from '@nestjs/common';
//
// import { Product } from './product.entity';
// import { ProductDto } from './dto/product.dto';
// import { PRODUCT_REPOSITORY } from '../../core/constants';
//
// @Injectable()
// export class ProductsService {
//     constructor(@Inject(PRODUCT_REPOSITORY) private readonly productModel: typeof Product) {}
//     /*async create(product: ProductDto): Promise<Product> {
//         const {img, city, price, description} = product;
//         return await this.productModel.create<Product>({img, city, price, description});
//     }*/
//     /*async create(product: ProductDto): Promise<Product> {
//         return await this.productModel.create<Product>({ ...product });
//     }*/
//     async create(product: ProductDto): Promise<Product> {
//         const {img, city, price, description} = product;
//         const newProduct = new this.productModel({img, city, price, description});
//         return newProduct.save();
//         /*await this.productModel.create<Product>({ ...productDto });*/
//     }
//     // async create(post: ProductDto, userId): Promise<Product> {
//     //     const {img, city, price, description} = product;
//     //     return await this.productModel.create<Product>({ ...post, userId });
//     // }
//     /*async create(product: ProductDto): Promise<Product> {
//         return await this.productModel.create<Product>(product);
//     }*/
//
//     async getProducts(): Promise<Product[]> {
//         const products = await this.productModel.findAll();
//         return products;
//     }
//     async deleteProduct(id) {
//         return await this.productModel.destroy({ where: { id } });
//     }
//     /*async editPost(postID, ProductDto: ProductDto): Promise<Product> {
//         const editedPost = await this.product
//           .update(postID, ProductDto);
//         return editedPost;
//     }*/
// }

import { Injectable, Inject, Body, NotFoundException } from '@nestjs/common';

import { Product } from './product.entity';
import { ProductDto } from './dto/product.dto';
import { PRODUCT_REPOSITORY } from '../../core/constants';

@Injectable()
export class ProductsService {
    constructor(@Inject(PRODUCT_REPOSITORY) private readonly productModel: typeof Product) {}
    async create(product: ProductDto): Promise<Product> {
        const {img, city, price, description} = product;
        const newProduct = new this.productModel({img, city, price, description});
        return newProduct.save();
    }
    async getProducts(): Promise<Product[]> {
        const products = await this.productModel.findAll();
        return products;
    }
    async deleteProduct(id) {
        return await this.productModel.destroy({ where: { id } });
    }
    /*async editPost(postID, productDto: ProductDto): Promise<Product> {
        const editedPost = await this.productModel.update(postID, productDto);
        return editedPost;
    }*/

    async findOne(id: string): Promise<Product> {
        const found = await this.productModel.findOne({where: { id } });
        if (!found) {
            throw new NotFoundException(`Not found User has id: ${id}`);
        }
        return found;
    }

    async updateProduct(id: string, productDto: ProductDto): Promise<Product> {

        const { img, city, price, description } = productDto;
        const product = await this.findOne(id);

        if ((city && description && img) !== '') {
            product.city = city;
            product.description = description;
            product.img = img;
        }
        if (price) {
            product.price = price;
        }

        return await product.save();
    }
}

