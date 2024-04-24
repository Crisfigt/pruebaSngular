import { FormulaComponent } from './formula.component';

describe('FormulaComponent', () => {
  let component: FormulaComponent;

  beforeEach(() => {
    component = new FormulaComponent();
  });

  it('formula general debe funcionar correctamente', () => {
    expect(component.formulaGeneral(1)).toBe(0);
    expect(component.formulaGeneral(2)).toBe(0);
    expect(component.formulaGeneral(3)).toBe(0);
    expect(component.formulaGeneral(4)).toBe(9);
    expect(component.formulaGeneral(5)).toBe(10.285714285714286);
    expect(component.formulaGeneral(6)).toBe(0);
    expect(component.formulaGeneral(7)).toBe(9.642857142857142);
    expect(component.formulaGeneral(8)).toBe(0);
    expect(component.formulaGeneral(9)).toBe(7.333333333333333);
    expect(component.formulaGeneral(10)).toBe(0);
  });


});

