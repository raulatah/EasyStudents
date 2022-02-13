function buscar(){  
    const wrd_reg = document.getElementById('txt').value;

    if(wrd_reg == "Canto" || wrd_reg == "canto"){
        swal( 'Palabra Encontrada con exito!', 'Del verbo Cantar Presente;  1a Persona del singular; Genero: Masculino', 'success');
    }else if(wrd_reg == "Bailo" || wrd_reg == "bailo"){
        swal('Palabra Encontrada con exito!', 'Del verbo Bailar Presente; 1a Persona del singular; Genero: Masculino', 'success');
    }else if(wrd_reg == "Intimidó" || wrd_reg == "intimidó" || wrd_reg == "Intimido" || wrd_reg == "intimido"){
        swal('Palabra Encontrada con exito', 'Del verbo Intimidar Presente; 1a Persona del singular; Genero: Masculino', 'success');
    }
}