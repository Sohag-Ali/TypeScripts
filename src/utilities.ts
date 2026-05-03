type Product = {
    id: number;
    name: string;
    price: string;
    stock: number;
    color?: string;
}

type ProductSummary = Pick<Product, 'id' | 'name' | 'price'>;

type ProductWithoutStock = Omit<Product, 'stock'>;

type ProductWithRequiredColor = Required<Product>;

const product : ProductWithRequiredColor = {
    id: 1,
    name: 'Laptop',
    price: '$999',
    stock: 10,
    color: 'Silver'
}

type OptionalProduct = Partial<Product>;

const optionalProduct: OptionalProduct = {
    id: 2,
    name: 'Smartphone',
    price: '$499',
    stock: 20
    // color is optional
}

type ReadonlyProduct = Readonly<Product>;

