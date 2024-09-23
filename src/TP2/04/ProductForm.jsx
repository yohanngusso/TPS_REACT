import './styles.css';

export default function ProductForm() {
    return (
        <div className="container">
            <div className="form-container">
                <form>
                    <div className="form-group">
                        <label htmlFor="productName">Nome do Produto</label>
                        <input type="text" id="productName" name="productName" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="salePrice">Preço de Venda</label>
                        <input type="number" id="salePrice" name="salePrice" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="costPrice">Preço de Custo</label>
                        <input type="number" id="costPrice" name="costPrice" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="category">Categoria</label>
                        <select id="category" name="category">
                            <option value="categoria1">Categoria 1</option>
                            <option value="categoria2">Categoria 2</option>
                            <option value="categoria3">Categoria 3</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="manufacturer">Fabricante</label>
                        <select id="manufacturer" name="manufacturer">
                            <option value="fabricante1">Fabricante 1</option>
                            <option value="fabricante2">Fabricante 2</option>
                            <option value="fabricante3">Fabricante 3</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Descrição</label>
                        <textarea id="description" name="description" rows="4"></textarea>
                    </div>
                    <div className="form-group">
                        <button type="submit">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}