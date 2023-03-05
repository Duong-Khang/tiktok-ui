import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import TippyHeadless from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Search.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import { useDebounce } from '~/hooks';
import * as searchServices from '~/services/searchService';

const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);

  const [loading, setLoading] = useState(false);

  const inputRef = useRef();

  const debounce = useDebounce(searchValue, 500);

  useEffect(() => {
    if (!debounce.trim()) {
      setSearchResult([]);
      return;
    }

    const fetchApi = async () => {
      setLoading(true);
      const result = await searchServices.search(debounce);
      setSearchResult(result);

      setLoading(false);
    };

    fetchApi();
  }, [debounce]);

  const handleClean = () => {
    setSearchValue('');
    inputRef.current.focus();
    setSearchResult([]);
  };

  const handleHideResult = () => {
    setShowResult(false);
  };

  const handleChange = (e) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(' ')) {
      setSearchValue(searchValue);
    }
  };

  return (
    <div>
      <TippyHeadless
        // appendTo={() => document.body}
        render={(attrs) => (
          <div className={cx('search-result')} tabIndex={-1} {...attrs}>
            <PopperWrapper>
              <h4 className={cx('search-title')}>Accounts</h4>
              {searchResult.map((result) => (
                <AccountItem key={result.id} data={result} />
              ))}
            </PopperWrapper>
          </div>
        )}
        visible={showResult && searchResult.length > 0}
        interactive={true}
        onClickOutside={handleHideResult}
      >
        <div className={cx('search')}>
          <input
            ref={inputRef}
            value={searchValue}
            onFocus={() => setShowResult(true)}
            onChange={handleChange}
            placeholder="Search accounts and videos"
            spellCheck={false}
          />
          {!!searchValue && !loading && (
            <button onClick={handleClean} className={cx('clear')}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          )}
          {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
          <button onMouseDown={(e) => e.preventDefault()} className={cx('search-btn')}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </TippyHeadless>
    </div>
  );
}

export default Search;
