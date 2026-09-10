export class Recipe {
  _name!: string;
  _description!: string;
  _category?: string;
  _preptime!: number;

  constructor(aName: string, Apreptime: number, aDescription: string) {
    this.name = aName;
    this.preptime = Apreptime;
    this._description = aDescription;
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

  get description(): string {
    return this._description;
  }

  set description(aDescription: string) {
    const trimmed = aDescription.trim();
    if (trimmed.length === 0) {
      throw new Error("La descripción de la receta no puede ser vacía.");
    }
    this._description = trimmed;
  }

  get category(): string | undefined {
    return this._category;
  }

  set category(aCategory: string) {
    this._category = aCategory;
  }

  toString(): string {
    return `Receta: ${this.name} - categoría: ${this.category} - descripción: ${this._description} - tiempo de preparación: ${this._preptime}`;
  }
}
