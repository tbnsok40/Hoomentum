// Javascript is synchronous.
// Execute the code block by order after hoisting.


// hoisting: var, function delclaration 이 제일 위로 올라가는 것

console.log(1)

setTimeout(() => {
    console.log('2');
}, 500)

console.log(3);

// handler 인자의 함수를 콜백함수라 한다.
// setTimeout 에 넘겨 500ms 뒤에 불러달라고 (callback) 요청한 함수.

// Synchronous callback => 호이스팅 되어 console.log(3) 뒤에 나와
function printImmediately(print) {
    print();
}


printImmediately(() => console.log('hello'));


// asynchronous callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}

// 비동기 -> callback 은 무조건 비동기인가?
printWithDelay(() => console.log('async callback'), 1000);

// callback 에도 동기로, 비동기로 실행할 수 있는 방법이 있다.


// callback 체험
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'lim' && password === 'hoo') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('Not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'lim') {
                onSuccess({name: 'lim', role: 'admin'});
            } else {
                onError(new Error("no access"));
            }
        })
    }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password")
userStorage.loginUser(id, password, user => {
    userStorage.getRoles(
        user,
        userWithRole => {
            alert(`${userWithRole.name}, ${userWithRole.role}`);
        },
        error => {
            console.log(error)
        })
}, (error) => {
    console.log(error)
});

// callback 지옥의 문제점: 가독성 x, 비즈니스 로직 이해하기도 어려워, 디버깅 상황에서도 어려움
