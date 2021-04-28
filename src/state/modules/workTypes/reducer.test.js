import reducer, {
    LOAD_WORKTYPES,
    LOAD_WORKTYPES_SUCCESS,
    LOAD_WORKTYPES_FAIL
} from "./index";

describe('workTypes reducer', () => {
   describe('LOAD with empty param reducer', ()=>{
       it('should return init state when invoke reducer with empty param', ()=>{
           const actual = reducer();
           expect(actual).toEqual({loading: false, workTypes:[]})
       })
   })

   describe('LOAD_WORKTYPES action', () =>{
       it('LOAD with null state', ()=>{
           const actual = reducer(null, {type: LOAD_WORKTYPES })
           expect(actual).toEqual({loading: true})
       })
   })

   describe('LOAD_WORKTYPES_SUCCESS', ()=>{
       it('sets loading to false and workTypes success', ()=>{
           const data = [
                {
                    cat: 'KIS KIS',
                    leha: 'ТЫ котик я котик'
                }
           ]
           const actual = reducer(null, {type: LOAD_WORKTYPES_SUCCESS, payload: data})
           expect(actual).toMatchObject({ loading: false });
       })
   })

    describe('LOAD_WORKTYPES_FAIL', ()=>{
        it('sets loading to false and workTypes success', ()=>{
            const error = { error: 'You are not cat'}

            const actual = reducer(null, {type: LOAD_WORKTYPES_FAIL, error})
            expect(actual).toMatchObject({ loading: false, error});
        })
    })
});