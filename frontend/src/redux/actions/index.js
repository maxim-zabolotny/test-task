import {API} from "../../lib/api";

export const createNewProduct = (data) => {
    API.post("/api/products", data); //eslint-disable-line
 }

export const deleteProduct = (id) => {
    API.delete(`/api/products/${id}`); //eslint-disable-line
}

export const updateProduct = (id, data) => {
    API.put(`/api/products/${id}`, data); //eslint-disable-line
}
