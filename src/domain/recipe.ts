export class Recipe {
  _name!: string;
  _category?: string;
  _preptime!: number;

  constructor(aName: string, Apreptime: number) {
    this.name = aName;
    this.preptime = Apreptime;
  }

  get name(): string {
    return this._name;
  }

  set name(aName: string) {
    const trimmed = aName.trim();
    if (trimmed.length === 0) {
      throw new Error("El nombre de la receta no puede ser vacío.");
    }
    this._name = trimmed;
  }

  get preptime(): number {
    return this._preptime;
  }

  set preptime(Apreptime: number) {
    if (!Apreptime) {
      throw new Error("El tiempo de preparación de la receta no puede ser vacío.");
    } else if(Apreptime < 0) {
      throw new Error("El tiempo de preparación de la receta debe ser mayor a 0.");
    }
    this._preptime = Apreptime;
  }

  get category(): string | undefined {
    return this._category;
  }

  set category(aCategory: string) {
    this._category = aCategory;
  }

  toString(): string {
    return `Receta: ${this.name} - categoría: ${this.category} - tiempo de preparación: ${this._preptime}`;
  }
}
