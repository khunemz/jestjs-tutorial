
import { ProductListComponent } from './product-list.component';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
 
  beforeEach(() => {
    component = new ProductListComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Group call function Calculate ' , () => {
    it('should call function calculate' , () => {
      component.setup = jest.fn();
      component.calculate();
      expect(component.setup).toHaveBeenCalled();
    })
  });
});
