const expect = require('chai').expect;
 
const generate_days_from = require('../../src/utils/days_generator');

describe( 'DaysGenerator', function() {
    describe( 'cuando se le pasa el mes 8 y los días lunes y martes', function() {
        it( 'debería generar una lista con la fecha de todos los lunes y martes de agosto', function() {
            const days_expected = [
                new Date('2023-08-01'), 
                new Date('2023-08-07'), 
                new Date('2023-08-08'), 
                new Date('2023-08-14'), 
                new Date('2023-08-15'), 
                new Date('2023-08-21'), 
                new Date('2023-08-22'), 
                new Date('2023-08-28'), 
                new Date('2023-08-29')
            ]

            const days = generate_days_from( {
                months: [8], days: [0, 1]
            });
            expect(days).to.eql( days_expected );
        })
    });

    describe( 'cuando se le pasa el mes 8 y los días lunes y miércoles', function() {
        it( 'debería retornar una lista con la fecha de los lunes y miércoles de agosto', function() {
            const days_expected = [
                new Date('2023-08-02'),
                new Date('2023-08-07'),
                new Date('2023-08-09'),
                new Date('2023-08-14'),
                new Date('2023-08-16'),
                new Date('2023-08-21'),
                new Date('2023-08-23'),
                new Date('2023-08-28'),
                new Date('2023-08-30')
            ]

            const days = generate_days_from( { months: [8], days: [0, 2]})
            expect( days ).to.eql( days_expected );
        })
    });

    describe( 'cuando se le pasa los meses 8 y 9', function() {
        describe( 'y se le pasa los días martes y viernes', function() {
            it( 'debería retornar una lista con los martes y viernes de agosto y septiembre', function() {
                days_expected = [
                    new Date("2023-08-01")
                    ,new Date("2023-08-04")
                    ,new Date("2023-08-08")
                    ,new Date("2023-08-11")
                    ,new Date("2023-08-15")
                    ,new Date("2023-08-18")
                    ,new Date("2023-08-22")
                    ,new Date("2023-08-25")
                    ,new Date("2023-08-29")
                    ,new Date("2023-09-01")
                    ,new Date("2023-09-05")
                    ,new Date("2023-09-08")
                    ,new Date("2023-09-12")
                    ,new Date("2023-09-15")
                    ,new Date("2023-09-19")
                    ,new Date("2023-09-22")
                    ,new Date("2023-09-26")
                    ,new Date("2023-09-29")
                ];
                const days = generate_days_from({ months: [8, 9], days: [1, 4] })
                expect( days ).to.eql( days_expected );
            })
        })
    });
})