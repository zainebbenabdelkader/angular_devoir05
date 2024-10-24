import { Style } from "./style.model"; // Ensure Style is imported

export class Lunette {
    idLunette!: number;      // ID of the lunette (changed from idProduit to idLunette)
    nomLunette!: string;     // Name of the lunette (changed from nomProduit to nomLunette)
    prixLunette!: number;    // Price of the lunette (changed from prixProduit to prixLunette)
    dateCreation!: Date;     // Date when the lunette was created
    style!: Style;           // Reference to Style (changed from categorie to style)

    // You can add methods here if needed
}
